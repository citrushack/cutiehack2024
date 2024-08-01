export const save = (filename, content) => {
  const element = document.createElement("a");
  element.setAttribute("href", content);
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export const download = async (src, file) => {
  const result = await fetch(src, {
    method: "GET",
    headers: {},
  });

  const blob = await result.blob();

  const url = URL.createObjectURL(blob);

  save(file, url);

  URL.revokeObjectURL(url);
};