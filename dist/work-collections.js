function selectCollection(value) {
  document.querySelectorAll('[data-collection-filter]').forEach(button => {
    const active = button.dataset.collectionFilter === value;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-work-collection]').forEach(collection => {
    collection.hidden = value !== 'all' && collection.dataset.workCollection !== value;
  });
}
document.querySelectorAll('[data-collection-filter]').forEach(button => {
  button.addEventListener('click', () => selectCollection(button.dataset.collectionFilter));
});
function revealLinkedCollection() {
  const target = document.getElementById(location.hash.slice(1));
  const collection = target?.closest('[data-work-collection]');
  if (collection) {
    selectCollection(collection.dataset.workCollection);
    requestAnimationFrame(() => target.scrollIntoView());
  }
}
window.addEventListener('hashchange', revealLinkedCollection);
revealLinkedCollection();
