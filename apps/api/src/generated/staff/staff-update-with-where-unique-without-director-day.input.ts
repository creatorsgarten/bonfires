import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutDirectorDayInput } from './staff-update-without-director-day.input';

@InputType()
export class StaffUpdateWithWhereUniqueWithoutDirectorDayInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutDirectorDayInput, {nullable:false})
    data!: StaffUpdateWithoutDirectorDayInput;
}
