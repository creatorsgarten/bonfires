import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffUpdateManyMutationInput } from './staff-update-many-mutation.input';
import { StaffWhereInput } from './staff-where.input';

@ArgsType()
export class UpdateManyStaffArgs {

    @Field(() => StaffUpdateManyMutationInput, {nullable:false})
    data!: StaffUpdateManyMutationInput;

    @Field(() => StaffWhereInput, {nullable:true})
    where?: StaffWhereInput;
}
