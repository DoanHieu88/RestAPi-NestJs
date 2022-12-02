import { BadRequestException, Injectable } from '@nestjs/common';
import { Status } from 'src/common/abstract/abstract.entity';
import { USER_NOT_FOUND } from 'src/common/constant/exception-constant';
import { hashPassword } from 'src/common/until/funtion-until';
import { UserRepository } from 'src/repository/users.repository';
import { changeInforUserDto, ForgotPasswordDto } from './users.dto';

@Injectable()
export class UsersService {
    constructor(
        private userRepository: UserRepository
    ) { }

    public async forgotPassword(payload: ForgotPasswordDto) {
        try {
            const user = await this.userRepository.findOne({ where: { email: payload.email, status: Status.Active } })

            if (!user) throw new BadRequestException(USER_NOT_FOUND)
            const audit = {
                lastModifiedOnDate: new Date()
            }
            const newPass = await hashPassword(payload.password)
            await this.userRepository.save({ ...user, ...audit,password:newPass })
            return { message: 'success' }
        } catch (error) {
            console.log(error);

            throw new BadRequestException('UPDATE NEW PASSWORD FAILED')
        }

    }

    public async changeInforUser(id:string, payload:changeInforUserDto){
        try {
            const user = await this.userRepository.findOne(id)
            if(!user) throw new BadRequestException(USER_NOT_FOUND);
            
            const audit = {
                lastModifiedOnDate: new Date()
            }
            const newUser = {...user,...payload,...audit}
            return await this.userRepository.save({...newUser})
            
        } catch (error) {
            console.log(error);
            
            throw new BadRequestException('CHANGE INFOR FAILED');
            
        }
    }
}
