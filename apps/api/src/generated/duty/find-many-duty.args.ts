import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DutyWhereInput } from './duty-where.input';
import { DutyOrderByWithRelationInput } from './duty-order-by-with-relation.input';
import { DutyWhereUniqueInput } from './duty-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DutyScalarFieldEnum } from './duty-scalar-field.enum';

@ArgsType()
export class FindManyDutyArgs {

    @Field(() => DutyWhereInput, {nullable:true})
    where?: DutyWhereInput;

    @Field(() => [DutyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DutyOrderByWithRelationInput>;

    @Field(() => DutyWhereUniqueInput, {nullable:true})
    cursor?: DutyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DutyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DutyScalarFieldEnum>;
}
