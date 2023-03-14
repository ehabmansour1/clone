let url = "https://seifahmed.com/";
let domain = url.match(
  /^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/gi
)[0];
fetch(`https://api.codetabs.com/v1/proxy/?quest=${url}`)
  .then((res) => res.text())
  .then((res) => {
    return res
      .replaceAll(/href=\"\//gi, `href="${domain}`)
      .replaceAll(/href=\".\//gi, `href="${domain}/`)
      .replaceAll(/src=\"\//gi, `src="${domain}`)
      .replaceAll(/src=\".\//gi, `src="${domain}/`);
  })
  .then((res) => {
    console.log(res);
    document.write(res);
  });
