# ijji
From: Instance to JSON, JSON to Instance *(pronounced like [Fiji](https://es.wikipedia.org/wiki/Fiyi) but without F)*<br>
is a library that provides a couple of functions to convert class instances to json, and json to class instances. Ah, it also offers a couple of types for typing like a champion.

**run:**<br>
`npm i enzodiazdev@ijji`

## Super simple example
```ts
import {json_to_instance, instance_to_json} from "@enzodiazdev/ijji";

class Person {
    public name:string
    
    constructor(name:string){
        this.name = name;
    }

    public hi():void {
        console.log("hi!");
    }
}

const lottie = new Person("lottie");
lottie.hi(); // "hi!"

database.write( instance_to_json(lottie) );

const john_data = database.get("john");
john_data.hi(); // ERROR, 'hi()' is not a function

const john = json_to_instance(john_data, Person);
john_data.hi(); // "hi!"
```

you can also:
```ts
import {PropertiesOf} from "@enzodiazdev/ijji";

const john_data:PropertiesOf<Person> = database.get("john");
```

## In your own class
```ts
import {instance_to_json, PropertiesOf} from "@enzodiazdev/ijji";

class Person {    
    public name:string
    
    constructor(name:string){
        this.name = name;
    }

    public hi():void {
        console.log("hi!");
    }

    public to_json():PropertiesOf<this> {
        return instance_to_json(this);
    }
}
```

That's all. 
