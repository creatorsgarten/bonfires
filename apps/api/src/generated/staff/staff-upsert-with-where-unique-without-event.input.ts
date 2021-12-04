import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutEventInput } from './staff-update-without-event.input';
import { StaffCreateWithoutEventInput } from './staff-create-without-event.input';

@InputType()
export class StaffUpsertWithWhereUniqueWithoutEventInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutEventInput, {nullable:false})
    update!: StaffUpdateWithoutEventInput;

    @Field(() => StaffCreateWithoutEventInput, {nullable:false})
    create!: StaffCreateWithoutEventInput;
}
