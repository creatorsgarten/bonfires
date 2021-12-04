import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffCreateWithoutUserInput } from './staff-create-without-user.input';

@InputType()
export class StaffCreateOrConnectWithoutUserInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateWithoutUserInput, {nullable:false})
    create!: StaffCreateWithoutUserInput;
}
