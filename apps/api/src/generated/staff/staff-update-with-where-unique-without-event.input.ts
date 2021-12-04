import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutEventInput } from './staff-update-without-event.input';

@InputType()
export class StaffUpdateWithWhereUniqueWithoutEventInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutEventInput, {nullable:false})
    data!: StaffUpdateWithoutEventInput;
}
