import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutStaffsInput } from './user-update-without-staffs.input';
import { UserCreateWithoutStaffsInput } from './user-create-without-staffs.input';

@InputType()
export class UserUpsertWithoutStaffsInput {

    @Field(() => UserUpdateWithoutStaffsInput, {nullable:false})
    update!: UserUpdateWithoutStaffsInput;

    @Field(() => UserCreateWithoutStaffsInput, {nullable:false})
    create!: UserCreateWithoutStaffsInput;
}
