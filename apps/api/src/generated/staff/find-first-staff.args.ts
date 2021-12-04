import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffWhereInput } from './staff-where.input';
import { StaffOrderByWithRelationInput } from './staff-order-by-with-relation.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StaffScalarFieldEnum } from './staff-scalar-field.enum';

@ArgsType()
export class FindFirstStaffArgs {

    @Field(() => StaffWhereInput, {nullable:true})
    where?: StaffWhereInput;

    @Field(() => [StaffOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StaffOrderByWithRelationInput>;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    cursor?: StaffWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [StaffScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof StaffScalarFieldEnum>;
}
