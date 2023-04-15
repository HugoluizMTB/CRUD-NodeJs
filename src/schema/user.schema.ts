import { Schema, model } from 'mongoose'
import { Menssage } from '../config/menssages/default-menssages'
import * as argon2 from 'argon2'
 

const UserSchema = new Schema ({
    name: {
        type: String,
        required: [true, Menssage.mongoRequired('nome')],
        uppercase: true
    },

    email: {
        type: String,
        required: [true, Menssage.mongoRequired('e-mail')],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, Menssage.mongoMatch('e-mail')]
    },
    password: {
        type: String,
        required: [true, Menssage.mongoRequired('Senha')],
        select: false,
    },

    verify: {
            type: Boolean,
            default: false,
        },

    age: {
        type: Number,
        required:[true, Menssage.mongoRequired('idade')],
        min: [18, Menssage.mongoMin('idade', '18')]
    },

    description: {
        type: String,
        lowercase: true
    }
    
}, {
    strict: true,
    timestamps: true,
    versionKey: false 
})


/**
 * index
 */

UserSchema.index({email: 1}, {unique: true})

UserSchema.pre('save', async function (next) {
    const user = this
    const hash = await argon2.hash(user.password + user.email)
    user.password = hash
    next()
})


export const UserRepository = model('User', UserSchema)
UserRepository.syncIndexes()