import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutUserInput } from './staff-update-without-user.input';
import { StaffCreateWithoutUserInput } from './staff-create-without-user.input';

@InputType()
export class StaffUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutUserInput, {nullable:false})
    update!: StaffUpdateWithoutUserInput;

    @Field(() => StaffCreateWithoutUserInput, {nullable:false})
    create!: StaffCreateWithoutUserInput;
}
