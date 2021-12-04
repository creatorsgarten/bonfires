import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutDirectorDayInput } from './staff-update-without-director-day.input';
import { StaffCreateWithoutDirectorDayInput } from './staff-create-without-director-day.input';

@InputType()
export class StaffUpsertWithWhereUniqueWithoutDirectorDayInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutDirectorDayInput, {nullable:false})
    update!: StaffUpdateWithoutDirectorDayInput;

    @Field(() => StaffCreateWithoutDirectorDayInput, {nullable:false})
    create!: StaffCreateWithoutDirectorDayInput;
}
