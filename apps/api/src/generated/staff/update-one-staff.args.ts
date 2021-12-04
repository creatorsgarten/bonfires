import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffUpdateInput } from './staff-update.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@ArgsType()
export class UpdateOneStaffArgs {

    @Field(() => StaffUpdateInput, {nullable:false})
    data!: StaffUpdateInput;

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;
}
