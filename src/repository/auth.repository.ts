import { User } from 'src/entity/users.entity';
import { EntityRepository } from 'typeorm';

@EntityRepository(User)
export class AuthRepository extends User {}
