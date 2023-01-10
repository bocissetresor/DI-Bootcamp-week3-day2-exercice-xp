let tooltip;

document.onmouseover = function(event) {
  // important: une souris qui se deplace rapidement peut sauter  "sauter" juste sur un élément enfant d'un noeud annote, sautant le parent
  // Donc l'évènement mouseover peut survenir sur un élément enfant.

  let anchorElem = event.target.closest('[data-tooltip]');

  if (!anchorElem) return;

  // monte l'info-bulle et s'en rappelle
  tooltip = showTooltip(anchorElem, anchorElem.dataset.tooltip);
}

document.onmouseout = function() {
  // Il est possible que l'évènement  mouseout se déclenche, mais nous sommes toujours dans l'élément
  // (sa cible était à l'intérieur et l'évènement a remonté)
  // Mais dans ce cas nous aurons un évènement  mouseover immédiatement,
  // donc l'info-bulle sera détruit et remontre
  //
  // Heureusement, le "clignotement"  ne sera pas visible,
  // Comme les deux évènements se déroulent presque au même moment
  if (tooltip) {
    tooltip.remove();
    tooltip = false;
  }

}


function showTooltip(anchorElem, html) {
  let tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = html;
  document.body.append(tooltipElem);

  let coords = anchorElem.getBoundingClientRect();

  // positionne l’info-bulle au centre de l’ element
  let left = coords.left + (anchorElem.offsetWidth - tooltipElem.offsetWidth) / 2;
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 5;
  if (top < 0) {
    top = coords.top + anchorElem.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';

  return tooltipElem;
}