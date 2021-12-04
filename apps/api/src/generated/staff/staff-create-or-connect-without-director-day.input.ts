import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffCreateWithoutDirectorDayInput } from './staff-create-without-director-day.input';

@InputType()
export class StaffCreateOrConnectWithoutDirectorDayInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateWithoutDirectorDayInput, {nullable:false})
    create!: StaffCreateWithoutDirectorDayInput;
}
