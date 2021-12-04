import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffCreateInput } from './staff-create.input';

@ArgsType()
export class CreateOneStaffArgs {

    @Field(() => StaffCreateInput, {nullable:false})
    data!: StaffCreateInput;
}
