
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
const demo = () => {
    console.log('demo');
};

class test {
    constructor() {
        console.log('test');
    }
    aaa() {
        console.log('aaa');
    }
}

export { test as default, demo };
