import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@ArgsType()
export class FindUniqueStaffArgs {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;
}
