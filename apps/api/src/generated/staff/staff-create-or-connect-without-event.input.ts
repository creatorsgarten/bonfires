import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffCreateWithoutEventInput } from './staff-create-without-event.input';

@InputType()
export class StaffCreateOrConnectWithoutEventInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateWithoutEventInput, {nullable:false})
    create!: StaffCreateWithoutEventInput;
}
