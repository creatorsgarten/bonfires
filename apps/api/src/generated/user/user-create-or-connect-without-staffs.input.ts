import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutStaffsInput } from './user-create-without-staffs.input';

@InputType()
export class UserCreateOrConnectWithoutStaffsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutStaffsInput, {nullable:false})
    create!: UserCreateWithoutStaffsInput;
}
