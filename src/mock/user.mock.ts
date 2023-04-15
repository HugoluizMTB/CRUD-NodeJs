import { UserModel } from "../model/index.user"

export const UserMock: UserModel[] = [
  {
    id: '1',
    name: 'Hugo Santos',
    age: 27,
    verify: false,
    description: 'Opcional',
    email: 'hugo.dba15@gmail.com',
    password: '123'
  },
  {
    id: '2',
    name: 'Felipe Costa',
    age: 30,
    verify: false,
    email: 'hugo.dba25@gmail.com',
    password: '154'
  },
]