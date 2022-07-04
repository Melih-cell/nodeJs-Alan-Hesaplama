const arg = process.argv.slice(2)


const PI = 3.14;

// pi * r * 2

const fonks= (r) => {
   const alan =  PI * r * 2;
    console.log(`yarıçap: ${r}, alan: ${alan}`)
}

fonks(arg[0])