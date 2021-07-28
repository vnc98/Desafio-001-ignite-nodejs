import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const validateUser = this.usersRepository.findById(user_id);

    if (!validateUser) {
      throw new Error('User does not exists');
    }

    if (!validateUser.admin) {
      throw new Error('User does not have permission');
    }

    const allUsers = this.usersRepository.list();

    return allUsers;
  }
}

export { ListAllUsersUseCase };
