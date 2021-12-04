import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SquadCreateWithoutDutiesInput } from './squad-create-without-duties.input';
import { SquadCreateOrConnectWithoutDutiesInput } from './squad-create-or-connect-without-duties.input';
import { SquadUpsertWithoutDutiesInput } from './squad-upsert-without-duties.input';
import { SquadWhereUniqueInput } from './squad-where-unique.input';
import { SquadUpdateWithoutDutiesInput } from './squad-update-without-duties.input';

@InputType()
export class SquadUpdateOneRequiredWithoutDutiesInput {

    @Field(() => SquadCreateWithoutDutiesInput, {nullable:true})
    create?: SquadCreateWithoutDutiesInput;

    @Field(() => SquadCreateOrConnectWithoutDutiesInput, {nullable:true})
    connectOrCreate?: SquadCreateOrConnectWithoutDutiesInput;

    @Field(() => SquadUpsertWithoutDutiesInput, {nullable:true})
    upsert?: SquadUpsertWithoutDutiesInput;

    @Field(() => SquadWhereUniqueInput, {nullable:true})
    connect?: SquadWhereUniqueInput;

    @Field(() => SquadUpdateWithoutDutiesInput, {nullable:true})
    update?: SquadUpdateWithoutDutiesInput;
}
