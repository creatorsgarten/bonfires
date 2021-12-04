import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { WorkspaceCountAggregate } from './workspace-count-aggregate.output';
import { WorkspaceAvgAggregate } from './workspace-avg-aggregate.output';
import { WorkspaceSumAggregate } from './workspace-sum-aggregate.output';
import { WorkspaceMinAggregate } from './workspace-min-aggregate.output';
import { WorkspaceMaxAggregate } from './workspace-max-aggregate.output';

@ObjectType()
export class AggregateWorkspace {

    @Field(() => WorkspaceCountAggregate, {nullable:true})
    _count?: WorkspaceCountAggregate;

    @Field(() => WorkspaceAvgAggregate, {nullable:true})
    _avg?: WorkspaceAvgAggregate;

    @Field(() => WorkspaceSumAggregate, {nullable:true})
    _sum?: WorkspaceSumAggregate;

    @Field(() => WorkspaceMinAggregate, {nullable:true})
    _min?: WorkspaceMinAggregate;

    @Field(() => WorkspaceMaxAggregate, {nullable:true})
    _max?: WorkspaceMaxAggregate;
}
