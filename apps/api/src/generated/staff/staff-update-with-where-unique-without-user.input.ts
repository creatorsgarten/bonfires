import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutUserInput } from './staff-update-without-user.input';

@InputType()
export class StaffUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutUserInput, {nullable:false})
    data!: StaffUpdateWithoutUserInput;
}
