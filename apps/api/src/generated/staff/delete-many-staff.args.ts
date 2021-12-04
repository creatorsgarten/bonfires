import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffWhereInput } from './staff-where.input';

@ArgsType()
export class DeleteManyStaffArgs {

    @Field(() => StaffWhereInput, {nullable:true})
    where?: StaffWhereInput;
}
