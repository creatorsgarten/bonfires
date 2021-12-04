import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RoleType } from '../prisma/role-type.enum';
import { RoleCountAggregate } from './role-count-aggregate.output';
import { RoleAvgAggregate } from './role-avg-aggregate.output';
import { RoleSumAggregate } from './role-sum-aggregate.output';
import { RoleMinAggregate } from './role-min-aggregate.output';
import { RoleMaxAggregate } from './role-max-aggregate.output';

@ObjectType()
export class RoleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => RoleType, {nullable:false})
    type!: keyof typeof RoleType;

    @Field(() => Int, {nullable:false})
    squadId!: number;

    @Field(() => RoleCountAggregate, {nullable:true})
    _count?: RoleCountAggregate;

    @Field(() => RoleAvgAggregate, {nullable:true})
    _avg?: RoleAvgAggregate;

    @Field(() => RoleSumAggregate, {nullable:true})
    _sum?: RoleSumAggregate;

    @Field(() => RoleMinAggregate, {nullable:true})
    _min?: RoleMinAggregate;

    @Field(() => RoleMaxAggregate, {nullable:true})
    _max?: RoleMaxAggregate;
}
