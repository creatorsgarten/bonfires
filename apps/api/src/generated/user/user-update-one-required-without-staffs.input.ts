import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutStaffsInput } from './user-create-without-staffs.input';
import { UserCreateOrConnectWithoutStaffsInput } from './user-create-or-connect-without-staffs.input';
import { UserUpsertWithoutStaffsInput } from './user-upsert-without-staffs.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutStaffsInput } from './user-update-without-staffs.input';

@InputType()
export class UserUpdateOneRequiredWithoutStaffsInput {

    @Field(() => UserCreateWithoutStaffsInput, {nullable:true})
    create?: UserCreateWithoutStaffsInput;

    @Field(() => UserCreateOrConnectWithoutStaffsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutStaffsInput;

    @Field(() => UserUpsertWithoutStaffsInput, {nullable:true})
    upsert?: UserUpsertWithoutStaffsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutStaffsInput, {nullable:true})
    update?: UserUpdateWithoutStaffsInput;
}
