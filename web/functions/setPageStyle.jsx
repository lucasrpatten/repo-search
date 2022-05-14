const applyStyle = (pageStyle) => {
  var element = document.getElementsByTagName("style")[0];
  element.innerHTML = pageStyle;
};

export default applyStyle;
