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
        dafault:'USER_ROLE',
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    status:{
        type:Boolean,
        default:true,
    },
    google:{
        type:Boolean,
        default:false
    }
})

// esto oculta la data
usuarioSchema.methods.toJSON = function(){
    const { __v,password,_id,...usuario } = this.Object();
    usuario.uid = _id;
    return usuario;
}

export const usuarioModel = model('Usuario',usuarioSchema);