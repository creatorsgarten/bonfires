import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffCreateManyInput } from './staff-create-many.input';

@ArgsType()
export class CreateManyStaffArgs {

    @Field(() => [StaffCreateManyInput], {nullable:false})
    data!: Array<StaffCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
