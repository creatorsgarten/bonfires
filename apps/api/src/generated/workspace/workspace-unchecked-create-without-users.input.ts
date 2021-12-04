import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EventUncheckedCreateNestedManyWithoutWorkspaceInput } from '../event/event-unchecked-create-nested-many-without-workspace.input';

@InputType()
export class WorkspaceUncheckedCreateWithoutUsersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => EventUncheckedCreateNestedManyWithoutWorkspaceInput, {nullable:true})
    events?: EventUncheckedCreateNestedManyWithoutWorkspaceInput;
}
