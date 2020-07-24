var lwj = {
    name: 'lwj',
};
Object.defineProperty(lwj, 'name', {
   get(value) {
        console.log('read', value, name);
   },
   set(newValue){
       console.log('write', newValue);
   }
})

Object.defineProperties(lwj, {
    name: {
        configurable: true,
        enumerable: true,
        
        get() {
            console.log('read name');
        },

        set(newValue) {
            console.log('write', newValue);
            this.name = newValue;
        }
    },

    price: {
        configurable: true,
        enumerable: true,
        
        get() {
            console.log('read price');
        },

        set(newValue) {
            console.log('write', newValue);
            this.price = newValue;
        }
    }
})

var descri = Object.getOwnPropertyDescriptor(lwj, 'name');

