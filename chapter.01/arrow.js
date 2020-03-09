var cls = {
    name: 'cls',
    desc: '잘되는 겁니다',
    coconut: function() {
        console.log('coconut', this)
    },
    methods: {
        func1: function() {
            console.log('func1', this)
        },
        func2: () => {
            console.log('func2', this)
        },
        func3() {
            console.log('func3', this)
        }
    }
}

cls.coconut()
cls.methods.func1()
cls.methods.func2()
cls.methods.func3()

var other = {
    name: 'other',
    desc: '이건 다른 거죠',
    coconut: () => {
        console.log('coconut', this)
    },
    methods: {
        func1: function() {
            console.log('func1', this)
        },
        func2: () => {
            console.log('func2', this)
        },
        func3() {
            console.log('func3', this)
        }
    }
}

other.coconut()
other.methods.func1()
other.methods.func2()
other.methods.func3()

class isClass {
    name = ''

    constructor(name) {
        this.name = name
    }

    get name() {
        return this.name
    }

    set name(v) {
        this.name = v
    }

    getAll() {
        console.log('getAll', this, this.name)
    }

    printName = function() {
        console.log('printName', this, this.name)
    }

    getName = (name) => {
        this.name = name
        console.log('getName', this)
    }
}

const obj = new isClass('김종윤')

obj.printName()
obj.getName('홍금보')
obj.getAll()