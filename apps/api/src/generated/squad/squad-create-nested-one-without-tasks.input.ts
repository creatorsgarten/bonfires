import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadCreateWithoutTasksInput } from './squad-create-without-tasks.input';
import { SquadCreateOrConnectWithoutTasksInput } from './squad-create-or-connect-without-tasks.input';
import { SquadWhereUniqueInput } from './squad-where-unique.input';

@InputType()
export class SquadCreateNestedOneWithoutTasksInput {

    @Field(() => SquadCreateWithoutTasksInput, {nullable:true})
    create?: SquadCreateWithoutTasksInput;

    @Field(() => SquadCreateOrConnectWithoutTasksInput, {nullable:true})
    connectOrCreate?: SquadCreateOrConnectWithoutTasksInput;

    @Field(() => SquadWhereUniqueInput, {nullable:true})
    connect?: SquadWhereUniqueInput;
}
