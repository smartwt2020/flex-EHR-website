(function () {
    let scrollDirection = 1
    let oldValue = 0;

    window.addEventListener('scroll', function (e) {

        // Get the new Value
        newValue = window.pageYOffset;

        //Subtract the two and conclude
        if (oldValue - newValue < 0) {
            scrollDirection = 1
        } else if (oldValue - newValue > 0) {
            scrollDirection = 0
        }

        // Update the old value
        oldValue = newValue;
    });

    function appendClass(el, value) {
        let classList = el.getAttribute('class')
        classList += ' ' + value
        el.setAttribute('class', classList)
    }

    function removeClass(el, value) {
        let classList = el.getAttribute('class') || ''
        classList = classList.replace(value, '').trim()
        el.setAttribute('class', classList)
    }

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entrie => {
            if (scrollDirection) {
                console.log(entrie)
                const animationClass = 'animate__animated ' + entrie.target.getAttribute('data-animation')
                const className = entrie.target.getAttribute('class') || ''
                if (!className.includes('animate__animated')) {
                    if (entrie.isIntersecting) {
                        appendClass(entrie.target, animationClass)
                        setTimeout(() => {
                            removeClass(entrie.target, animationClass)
                        }, 2000)
                    } else {
                        removeClass(entrie.target, animationClass)
                    }
                }
            }

        })
    }, { threshold: 1, rootMargin: '-50px' })


    document.querySelectorAll('[data-animation]').forEach(ele => {
        observer.observe(ele)
    })
})()