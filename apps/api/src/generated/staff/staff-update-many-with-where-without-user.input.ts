import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffScalarWhereInput } from './staff-scalar-where.input';
import { StaffUpdateManyMutationInput } from './staff-update-many-mutation.input';

@InputType()
export class StaffUpdateManyWithWhereWithoutUserInput {

    @Field(() => StaffScalarWhereInput, {nullable:false})
    where!: StaffScalarWhereInput;

    @Field(() => StaffUpdateManyMutationInput, {nullable:false})
    data!: StaffUpdateManyMutationInput;
}
