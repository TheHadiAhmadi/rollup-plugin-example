import { rollup } from "rollup";

/**
 * @type {import('rollup').Plugin}
 */
const myPlugin = {
    name: 'My-plugin',
    transform(id) {
        let result = id;

        if(id.includes('use-label-component')) {
            result = "import './label'\n" + result
        }
        
        if(id.includes('use-text-component')) {
            result = "import './text'\n" + result
        }

        if(id.includes('use-button-component')) {
            result = "import './button'\n" + result
        }
         
        if(id.includes('use-input-component')) {
            result = "import './input'\n" + result
        }

        if(id.includes('use-deeply-component')) {
            result = "import './deeply'\n" + result
        }
        if(id.includes('use-nested-component')) {
            result = "import './nested'\n" + result
        }
        if(id.includes('use-component-component')) {
            result = "import './component'\n" + result
        }

        console.log("transform", {input: id, output: result})
        return result;
    },
    load(id) {
        console.log(`Loading ${id}`)
    }
}

console.log("start")
await rollup({
    input: ['components/input.js'],
    plugins: [
        myPlugin
    ]
}).then(bundle => {
    bundle.write({
        file: 'output.js',
        format: 'cjs'
    })
})
console.log("end")