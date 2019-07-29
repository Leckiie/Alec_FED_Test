(() => {
  function handleClick (event) {
    event.preventDefault()
    console.log(event.target)
  }

  document.querySelectorAll('a').forEach(value => value.addEventListener('click', handleClick))
})()
