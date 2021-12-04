import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadCreateWithoutDutiesInput } from './squad-create-without-duties.input';
import { SquadCreateOrConnectWithoutDutiesInput } from './squad-create-or-connect-without-duties.input';
import { SquadWhereUniqueInput } from './squad-where-unique.input';

@InputType()
export class SquadCreateNestedOneWithoutDutiesInput {

    @Field(() => SquadCreateWithoutDutiesInput, {nullable:true})
    create?: SquadCreateWithoutDutiesInput;

    @Field(() => SquadCreateOrConnectWithoutDutiesInput, {nullable:true})
    connectOrCreate?: SquadCreateOrConnectWithoutDutiesInput;

    @Field(() => SquadWhereUniqueInput, {nullable:true})
    connect?: SquadWhereUniqueInput;
}
