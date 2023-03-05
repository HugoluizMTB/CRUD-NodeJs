import { UserModel } from "../model/index.user"

export const UserMock: UserModel[] = [
  {
    id: '1',
    name: 'Bruno Pereira',
    age: 25,
    verify: false,
    description: 'Opcional'
  },
  {
    id: '2',
    name: 'Felipe Costa',
    age: 30,
    verify: false,
  },
]