import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffCreateInput } from './staff-create.input';
import { StaffUpdateInput } from './staff-update.input';

@ArgsType()
export class UpsertOneStaffArgs {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateInput, {nullable:false})
    create!: StaffCreateInput;

    @Field(() => StaffUpdateInput, {nullable:false})
    update!: StaffUpdateInput;
}
