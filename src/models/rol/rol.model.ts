import { Schema,model} from 'mongoose';

const rolSchema = new Schema({
    rol:{
        type:String,
        required:[true,'El rol es obligatorio']
    }
})

export const rolModel = model('rol',rolSchema)