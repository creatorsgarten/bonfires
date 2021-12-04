import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStaffsInput } from './user-create-without-staffs.input';
import { UserCreateOrConnectWithoutStaffsInput } from './user-create-or-connect-without-staffs.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutStaffsInput {

    @Field(() => UserCreateWithoutStaffsInput, {nullable:true})
    create?: UserCreateWithoutStaffsInput;

    @Field(() => UserCreateOrConnectWithoutStaffsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutStaffsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
