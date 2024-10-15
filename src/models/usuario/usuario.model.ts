import { Schema,model } from 'mongoose';

const usuarioSchema =  new Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true,'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'La contraseña es obligatoria']
    },
    img:{
        type:String
    },
    rol:{
        type:String,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    status:{
        type:Boolean,
        default:true,
    },
    gooogle:{
        type:Boolean,
        default:false
    }
})

// esto oculta la data
usuarioSchema.methods.toJSON = function(){
    const { __v,password,...usuario } = this.Object();
    return usuario;
}

export const usuarioModel = model('Usuario',usuarioSchema);