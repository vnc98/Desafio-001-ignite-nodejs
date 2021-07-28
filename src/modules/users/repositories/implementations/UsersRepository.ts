import { User } from '../../model/User';
import { IUsersRepository, ICreateUserDTO } from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    // Complete aqui
    const newUser = new User();

    Object.assign(newUser, {
      name,
      email,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(newUser);

    return newUser;
  }

  findById(id: string): User | undefined {
    // Complete aqui
    const findUser = this.users.find((user) => user.id === id);

    return findUser;
  }

  findByEmail(email: string): User | undefined {
    // Complete aqui
    const findUser = this.users.find((user) => user.email === email);

    return findUser;
  }

  turnAdmin(receivedUser: User): User {
    // Complete aqui
    const updateUser = receivedUser;
    updateUser.admin = true;

    const userFindIndex = this.users.findIndex(
      (users) => users.id === updateUser.id
    );

    this.users[userFindIndex] = updateUser;

    return updateUser;
  }

  list(): User[] {
    // Complete aqui
    return this.users;
  }
}

export { UsersRepository };
